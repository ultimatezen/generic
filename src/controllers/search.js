import { 
	plan as mPlan,
	planDetail as mPlanDetail,
	area as mArea,
	genre as mGenre,
	media as mMedia
} from '../models';
import { getByLang, getFromArray } from './helpers';

const types = [
	'area',
	'genre',
	'plan'
];

function buildWhere(columns, query) {
	let where = {};

	if (columns.length === 1) {
		where[columns[0]] = {
			$like: `%${query}%`
		};

		return where;
	} 

	where.$or = [];

	columns.forEach((column) => {
		let subClause = {};

		subClause[column] = {
			$like: `%${query}%`
		};

		where.$or.push(subClause);
	});

	return where;
}

function buildInclude(model, columns, query) {
	const include = {
		model: model,
		where: buildWhere(columns, query)
	};

	return include;
}

function buildClause(query, type) {
	let clause = {
		include: [
			{ model: mMedia }
		]
	};

	// if type is provided, only search on that
	// if no type is provided, just search everything
	switch (type) {
	case 'area':
		clause.include.push(buildInclude(mArea, [ 'name' ], query));
		break;
	case 'genre':
		clause.include.push(buildInclude(mGenre, [ 'name' ], query));
		break;
	case 'plan':
		clause.include.push(buildInclude(mPlanDetail, [ 'name', 'desc' ], query));
		break;
	default:
		clause.include.push(buildInclude(mArea, [ 'name' ], query));
		clause.include.push(buildInclude(mGenre, [ 'name' ], query));
		clause.include.push(buildInclude(mPlanDetail, [ 'name', 'desc' ], query));
	}

	return clause;
}

function search(query, type, lang) {
	// TODO: sequelize can't do this complex of a query
	// const clause = buildClause(query, type);

	const clause = {
		include: [ mPlanDetail, mArea, mGenre, mMedia ]
	};

	return mPlan.findAll(clause);
}

function serialize(rawData, lang) {
	const planDetail = getFromArray(rawData.planDetails, lang);
	const area = rawData.areas[0];
	const name = planDetail && planDetail.name || '';
	const areaName = getByLang(area.name, lang) || '';

	const plan = {
		id: rawData.id,
		name: name,
		area: areaName,
		rating: 0,
		hour: rawData.duration,
		// TODO: imageUrl
		imageUrl: 'https://goo.gl/HQsxtw'
	};

	return plan;
}

export { search, serialize };
