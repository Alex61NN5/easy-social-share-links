function shareLink(provider, link, text = null) {
	switch (provider) {
		case 'fb':
			return 'https://www.facebook.com/sharer/sharer.php?u=' + link;
		case 'tw':
			return 'https://twitter.com/intent/tweet?url=' + link + (text ? '&text=' + text : '');
		case 'li':
			return 'https://www.linkedin.com/shareArticle?mini=true&url=' + link;
		default:
			return '#';
	}
}

export default shareLink;
