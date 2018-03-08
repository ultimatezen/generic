import mPrefectures from '../../db/stateById.json';
import mCities from '../../db/cityById.json';

export default () => {
	// prefecture and city info for testing
	function listPrefectures() {
		return mPrefectures;
	}

	function getPrefecture(prefectureId) {
		return mPrefectures[prefectureId];
	}

	function listCities(prefectureId) {
		const prefecture = mPrefectures[prefectureId];
		return prefecture && prefecture.cities || [];
	}

	function getCity(cityId) {
		return mCities[cityId] || null;
	}

	function get(areaId) {
		return mCities[areaId] || null;
	}

	function getParents() {
		// TODO: associate areas and subareas
	}

	function getChildren() {
		// TODO: associate areas and subareas
	}
}
