function shareLink(provider, link, text = null, emailBody = null) {
	switch (provider) {
		case 'wa':
			return 'https://wa.me/?text=' + link;
		case 'fb':
			return 'https://www.facebook.com/sharer/sharer.php?u=' + link;
		case 'tw':
			return 'https://twitter.com/intent/tweet?url=' + link + (text ? '&text=' + text : '');
		case 'li':
			return 'https://www.linkedin.com/sharing/share-offsite/?url=' + link + (text ? '/&summary=' + text : '');
		case 'em':
			return (
				'mailto:' +
				(text ? '?subject=' + text : '') +
				(text ? '&body=' : '?body=') +
				(emailBody ? emailBody : '') +
				' ' +
				link
			);
		default:
			return '#';
	}
}

export default shareLink;
