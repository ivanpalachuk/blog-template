interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'ViCo', // Site author
	title: 'ViCo Blog', // Site title.
	description: 'A blog for ViCo Virtual Concierge about the latest technologies and trends', // Description to display in the meta tags
	lang: 'en-EU',
	ogLocale: 'en_EU',
	shareMessage: 'Hey! check this awesome post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
