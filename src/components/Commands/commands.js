/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat";
export default {
  commands: {
    echo: {
      description: "Prints the given text to the console",
      usage: "echo <text>",
      fn: (...args) => args.join(" "),
    },
    // cat: {
    //     description: 'Get a cute cat image.',
    //     usage: 'cat',
    //     fn: async () => {
    //         const url = await getcat()
    //         window.open(url, '_blank')
    //         return "fetching cat...\ncat fetched successfully!"
    //     }
    // },
    twitter: {
      description: "My Twitter Handle.",
      usage: "twitter",
      fn: () => {
        window.open("https://twitter.com/EmojiPati", "_blank");
        return "opening twitter handle...";
      },
    },
    github: {
      description: "My GitHub Profile.",
      usage: "twitter",
      fn: () => {
        window.open("https://github.com/EmojiPati", "_blank");
        return "opening github account...";
      },
    },
    discord: {
      description: "My Discord Account.",
      usage: "twitter",
      fn: () => {
        window.open(
          "https://discordapp.com/users/407130330710147073",
          "_blank"
        );
        return "opening discord account...";
      },
    },
    skills: {
      description: "Languages I'm currently learning.",
      usage: "skills",
      fn: () => {
        return `
                    I'am Currently Learning;\n---\n
                    React\n
                    Node.js\n
                    TypeScript\n
                    Nuxt/Next/Nest.js\n
                    TypeOrm\n
                    WebSockets\n
                    JQuery\n
                    Java\n
                    DevOps
                `;
      },
    },

    editor: {
      description: "Details about my current editor",
      usage: "editor",
      fn: () => {
        return `    Terminal: Hyper\n
                    Editor: Visual Studio Code\n
                    Theme : Termoji\n
                    Font  : Delicious Handrawn
                `;
      },
    },
  },
  overwrites: {
    help: {
      description: "List all available commands",
      usage: "help",
    },
    cd: {
      description: "Change directory, not really, lol!",
      usage: "cd <directory>",
    },
    ls: {
      description: "List files in the current directory",
      usage: "ls",
    },
    mkdir: {
      description: "Make a directory",
      usage: "mkdir <directory>",
    },
    clear: {
      description: "Clears the terminal",
      usage: "clear",
    },
    pati: {
      description: "Get a Random Cat.",
      usage: "pati",
    },
    about: {
      description: "About Me",
      usage: "about",
    },
  },
};
