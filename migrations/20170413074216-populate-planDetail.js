'use strict';

var testDetails = [
	{
		planId: 1,
		lang: 'ja',
		name: '猫喫茶1',
		catchphrase: '猫が好きな人にぴったり！',
		desc: '猫と触れ合う',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 2,
		lang: 'ja',
		name: '猫喫茶2',
		catchphrase: '猫が好きな人にぴったり！',
		desc: '猫と触れ合う',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 3,
		lang: 'ja',
		name: '猫喫茶3',
		catchphrase: '猫が好きな人にぴったり！',
		desc: '猫と触れ合う',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 4,
		lang: 'ja',
		name: '猫喫茶4',
		catchphrase: '猫が好きな人にぴったり！',
		desc: '猫と触れ合う',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 5,
		lang: 'ja',
		name: '猫喫茶5',
		catchphrase: '猫が好きな人にぴったり！',
		desc: '猫と触れ合う',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 1,
		lang: 'en',
		name: 'Cat cafe1',
		catchphrase: 'Perfect for cat lovers!',
		desc: 'Spend some time with cats',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 2,
		lang: 'en',
		name: 'Cat cafe2',
		catchphrase: 'Perfect for cat lovers!',
		desc: 'Spend some time with cats',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 3,
		lang: 'en',
		name: 'Cat cafe3',
		catchphrase: 'Perfect for cat lovers!',
		desc: 'Spend some time with cats',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 4,
		lang: 'en',
		name: 'Cat cafe4',
		catchphrase: 'Perfect for cat lovers!',
		desc: 'Spend some time with cats',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	},
	{
		planId: 5,
		lang: 'en',
		name: 'Cat cafe5',
		catchphrase: 'Perfect for cat lovers!',
		desc: 'Spend some time with cats',
		seoTitle: '',
		seoDesc: '',
		seoKeywords: '',
		createdAt: new Date(),
		updatedAt: new Date()
	}

];

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.bulkInsert('planDetail', testDetails);
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('planDetail', null, {});
	}
};

