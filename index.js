function shareLink(provider, link, text = null, emailBody = null) {
	switch (provider) {
		case 'fb':
			return 'https://www.facebook.com/sharer/sharer.php?u=' + link;
		case 'tw':
			return 'https://twitter.com/intent/tweet?url=' + link + (text ? '&text=' + text : '');
		case 'li':
			return 'https://www.linkedin.com/shareArticle?mini=true&url=' + link;
		case 'em':
			// text is the subject and emailBody is the text bfore the link
			return 'mailto:' + (text ? '?subject=' + text : '') + '&body=' + (emailBody ? emailBody : '') + ' ' + link;
		default:
			return '#';
	}
}

export default shareLink;
