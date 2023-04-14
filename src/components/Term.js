import Terminal from "react-console-emulator";
import commands from "../components/Commands/commands.js";
import React from "react";
import getcat from "../utils/cat";
import css from "./css/mobile.css";

export default function Term() {
  const cmds = commands.commands;
  const owrs = commands.overwrites;
  const terminal = React.createRef();
  const [prompt, setPrompt] = React.useState("Termoji@EmojiPati:~$ ");
  const [home, sethome] = React.useState("termoji");
  const [dir, setdir] = React.useState({
    termoji: [],
  });
  return (
    <Terminal
      ref={terminal}
      welcomeMessage={[
        /* <img
          className="nomobile"
          src="https://media3.giphy.com/media/E6jscXfv3AkWQ/giphy.gif?cid=ecf05e4765k4v6yfp1p6ptoedlh5360mcodmnnt1f82v6g94&rid=giphy.gif&ct=g"
          width="128"
          height="128"
          style={{ float: "right", marginRight: "-20px", marginTop: "-20px" }}
        />, */
        <div>
          <strong className="welcome">Welcome!</strong>{" "}
          <a className="wmessage">to The Termoji</a>
        </div>,

        <div className="wmessage2">
          This is a{" "}
          <span className="termoji" style={{ color: "#2E0249" }}>
            <strong>Terminal</strong>
          </span>{" "}
          Based Portfolio.
        </div>,
        <div className="wmessage">
          Type <span className="help">help</span> to see a list of commands.
        </div>,
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        'My suggestion, type "pati" first 🐱‍💻.',
      ]}
      commands={{
        clear: {
          description: "Clears the terminal",
          usage: "clear",
          fn: () => {
            terminal.current.clearStdout();
          },
        },
        pati: {
          description: "Get a Random Cat.",
          usage: "pati",
          fn: async () => {
            const url = await getcat();
            terminal.current.pushToStdout("😻Little Cute Cats for You...😻");
            terminal.current.pushToStdout(
              <img src={url} width="500px" height="380px" alt="cat"></img>
            );
          },
        },

        cd: {
          description: "Change directory, not really, lol!",
          usage: "cd <directory>",
          fn: (...args) => {
            if (args.length === 1 && args[0] === "..") {
              if (prompt === "Termoji@EmojiPati:~$ ") {
                return "cannot go up";
              } else {
                setPrompt(
                  prompt.substring(0, prompt.lastIndexOf("/")) + ":~$ "
                );
                sethome(
                  prompt.substring(
                    prompt.lastIndexOf("/", prompt.lastIndexOf("/") - 1) + 1,
                    prompt.lastIndexOf("/")
                  )
                );
                //console.log(prompt.substring(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1)+1, prompt.lastIndexOf('/')))
                //console.log(prompt.lastIndexOf('/', prompt.lastIndexOf('/')-1))
                //console.log(prompt.lastIndexOf('/'))
                return "changed directory";
              }
            } else {
              if (dir[home].includes(args[0])) {
                setPrompt(
                  `${prompt.slice(0, -4) + "/" + args.join("/") + ":~$ "}`
                );
                sethome(args.join("/"));
                //console.log(prompt.slice(0, -4)+ "/" + args.join('/'))
                return "changed directory";
              } else {
                return "cannot find directory";
              }
            }
          },
        },
        ls: {
          description: "List files in the current directory",
          usage: "ls",
          fn: () => {
            if (dir[home].length === 0) {
              return "nothing here :(\nUse mkdir to create a dir inside this one.";
            } else {
              return dir[home].join("\n");
            }
          },
        },
        mkdir: {
          description: "Make a directory",
          usage: "mkdir <directory>",
          fn: (...args) => {
            if (args.length === 1) {
              setdir({
                ...dir,
                [home]: [...dir[home], args[0]],
                [args[0]]: [],
              });
              //console.log(dir)
              return `created directory ${args[0]}.`;
            } else {
              return "invalid arguments";
            }
          },
        },
        help: {
          description: "List all available commands",
          usage: "help",
          fn: () => {
            return `
                            ${Object.keys(owrs)
                              .map(
                                (cmd) =>
                                  `${cmd}${" ".repeat(12 - cmd.length)} | ${
                                    owrs[cmd].description
                                  }${" ".repeat(
                                    39 - owrs[cmd].description.length
                                  )} | ${owrs[cmd].usage}`
                              )
                              .join("\n")}
                            ${Object.keys(cmds)
                              .map(
                                (cmd) =>
                                  `${cmd}${" ".repeat(12 - cmd.length)} | ${
                                    cmds[cmd].description
                                  }${" ".repeat(
                                    39 - cmds[cmd].description.length
                                  )} | ${cmds[cmd].usage}`
                              )
                              .join("\n")}
                        `;
          },
        },
        ...cmds,
      }}
      promptLabel={prompt}
      autoFocus
      style={{
        backgroundColor: null,
        minHeight: null,
        maxHeight: null,
        overflow: "auto",
        height: "100%",
        width: "100%",
      }}
      styleEchoBack="fullInherit"
      contentStyle={{
        color: "#ffb86c",
        fontWeight: "normal",
        paddingLeft: null,
      }} // Text colour
      promptLabelStyle={{ color: "#FF0000", fontWeight: "normal" }} // Prompt label colour
      inputTextStyle={{ color: "#000000", fontWeight: "normal" }}
      messageStyle={{
        color: "white",
        fontWeight: "normal",
        paddingLeft: null,
      }}
      scrollBehavior="auto"
      noDefaults
    />
  );
}
