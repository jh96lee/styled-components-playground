import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// TODO: this is how you set a global style
const Global = createGlobalStyle`
  * {
    margin: 0;
	  padding: 0;
	  box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
    letter-spacing: -1px;
    color: ${(props) => props.theme.primaryTxt};
    background-color: ${(props) => props.theme.bg};
  }
`;

const PageTitle = styled.h1`
	font-size: 25px;
	font-weight: 500;
`;

const PageContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 8px;
	width: 75%;
	margin: 40px auto auto auto;
`;

// TODO: interpolation is basically template interal in Javascript with the callback receiving the props argument
const Button = styled.button`
	background-color: ${(props) => props.theme.btnBg};
	color: ${(props) => props.theme.btnTxt};
	font-size: 15px;
	font-weight: 300;
	width: fit-content;
	padding: 12px 17px;
	border-radius: 5px;
	border: none;
	outline: none;

	&:hover {
		cursor: pointer;
	}
`;

// TODO: override an existing style component and add in couple
const LinkButton = styled(Button)`
	background-color: #ff5a19;
	text-decoration: none;
`;

// TODO: you can dynamically change the type of an element like this
const Input = styled.input.attrs((props) => ({
	type: props.password ? "password" : "text",
	placeholder: props.password ? "Enter your password" : "Comment",
}))`
	color: ${(props) => props.theme.primaryTxt};
	background-color: ${(props) => props.theme.inputBg};
	border: 4px solid ${(props) => props.theme.border};
	padding: 14px 16px;
	font-size: 14px;
	outline: none;
`;

function App() {
	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const themeObjectCreator = (isDarkState) => ({
		bg: `${isDarkState ? "#0e141b" : "#f5f5f5"}`,
		primaryTxt: `${isDarkState ? "#f5f5f5" : "#000000"}`,
		secondaryTxt: `${isDarkState ? "purple" : "green"}`,
		btnBg: `${isDarkState ? "#6199ff" : "#2874fd"}`,
		btnTxt: "#ffffff",
		border: `${isDarkState ? "#6358ff" : "#000000"}`,
		inputBg: `${isDarkState ? "#151515" : "#ffffff"}`,
	});

	return (
		<ThemeProvider theme={themeObjectCreator(isDarkTheme)}>
			<Global />
			<PageContainer>
				<PageTitle>Home</PageTitle>

				<Button>Click Me!</Button>

				{/* TODO: using the as prop changes the element of the styled component and adding href allows you to use it as a link */}
				<LinkButton as="a" href="/play">
					Click Me!
				</LinkButton>

				<Input size="30px" />

				<Input size="20px" />

				<Button onClick={(e) => setIsDarkTheme((prevState) => !prevState)}>
					{isDarkTheme ? "Switch To Light" : "Switch to Dark"}
				</Button>
			</PageContainer>
		</ThemeProvider>
	);
}

export default App;
