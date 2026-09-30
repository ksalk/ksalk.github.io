/** Average adult reading speed for technical prose, in words per minute. */
const WORDS_PER_MINUTE = 220;

export function readingTime(body: string | undefined): number {
	if (!body) return 0;
	const words = body
		// Strip fenced code blocks and inline code — sampled, not read
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		// Strip markdown syntax and URLs
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/https?:\/\/\S+/g, ' ')
		.replace(/[#*_>|-]/g, ' ')
		.trim()
		.split(/\s+/)
		.filter(Boolean);

	return Math.max(1, Math.round(words.length / WORDS_PER_MINUTE));
}