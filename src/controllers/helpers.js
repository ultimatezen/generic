function getByLang(data, lang) {
	return data[lang] || '';
}

function getFromArray(values, lang) {
	if (!values.length) {
		return null;
	}

	const target = values.find((value) => {
		return value.lang === lang;
	});

	if (!target) {
		return null;
	}

	return target;
}

export { getByLang, getFromArray };
