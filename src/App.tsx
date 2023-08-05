import { ThemeProvider } from "styled-components";
import "./App.css";
import capriLogo from "./logo.png";
// @ts-ignore
import ChatBot from "react-simple-chatbot";

function App() {
  let testeMomory = "";
  const capriMessages = {
    hello: "Olá, qual é o seu nome?",
    email:
      "Vamos conversar {previousValue}, mas primeiro digite seu email ou telefone:",
    option: "Você está em busca de:",
    site: "Qual o tipo de site que você procura?",
    socials: "Em qual plataforma?",
    design: "Você já possui um logo?",
  };
  const capriTheme = {
    background: "#fafafa",
    fontFamily: "system-ui",
    headerBgColor: "#404040",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#404040",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const capriSteps = [
    {
      id: 1,
      message: capriMessages.hello,
      trigger: 2,
    },
    {
      id: 2,
      metadata: {},
      user: true,
      trigger: 3,
    },
    {
      id: 3,
      message: capriMessages.email,
      trigger: 4,
    },
    {
      id: 4,
      user: true,
      trigger: 5,
    },
    {
      id: 5,
      message: capriMessages.option,
      trigger: 6,
    },
    {
      id: 6,
      // user: true,
      options: [
        { value: 1, label: "Site", trigger: 7 },
        { value: 2, label: "Redes Sociais", trigger: 8 },
        { value: 3, label: "Designer", trigger: 9 },
      ],
    },
    {
      id: 7,
      message: capriMessages.site,
    },
    {
      id: 8,
      message: capriMessages.socials,
    },
    {
      id: 9,
      message: capriMessages.design,
    },
  ];
  return (
    <>
      <div className="bg-[#bfbfbf] p-10">
        <ThemeProvider theme={capriTheme}>
          <ChatBot botAvatar={capriLogo} steps={capriSteps} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
