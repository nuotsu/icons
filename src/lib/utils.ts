export function propsToString(props: Record<string, any>): string {
	return Object.entries(props)
		.filter(([key]) => key !== 'children')
		.map(([key, value]) => `${key}="${value}"`)
		.join(' ')
}

export function renderToStaticMarkup({
	children,
}: {
	children: Array<React.ReactElement<Record<string, any>>>
}): string {
	return children
		.map(
			(child) =>
				`<${child.type} ${propsToString(child.props)}>${renderToStaticMarkup({ children: child.props.children })}</${child.type}>`,
		)
		.join('')
}