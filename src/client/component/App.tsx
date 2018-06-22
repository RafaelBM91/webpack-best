import * as React from 'react';
import styled from 'styled-components';

const OutText = styled.h1`
	color: blue;
`;

class App extends React.Component<{}, {}> {
	render () {
		return (
			<OutText>Hello Guys</OutText>
		);
	}
}

export { App };

