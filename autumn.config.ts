import { feature, item, plan } from 'atmn';

// Features
export const built_in_srs = feature({
	id: 'built-in_srs',
	name: 'Built-in SRS',
	type: 'boolean',
});

// Plans
export const pro_plan = plan({
	id: 'pro_plan',
	name: 'Pro Plan',
	autoEnable: true,
	price: {
		amount: 8,
		interval: 'month',
	},
	items: [
		item({
			featureId: built_in_srs.id,
			included: 0,
		}),
	],
	freeTrial: { durationLength: 15, durationType: 'day', cardRequired: false },
});
