export default {
    colour: {
      getFavourite: {
        favourite: "You favourite is: %s",
        noFavourite: "You haven't selected your favourite colour."
      },
      setFavourite: {
        colours: [
          "Black",
          "Blue",
          "Brown",
          "Gold",
          "Green",
          "Orange",
          "Purple",
          "Red",
          "Silver",
          "White",
          "Yellow"
        ],
        prompt: "Which is your favourite color?",
        retryPrompt:
          "Sorry I didn’t understand. Please choose an option from the list by either entering the number or colour name.",
        selection: "You selected: %s"
      }
    },
    default: {
      message: "Sorry, I did not understand. Type 'help' if you need assistance."
    },
    global: {
      help: {
        message:
          "You can ask me things about:\n\n * Get favourite colour\n\n * Set favourite colour"
      }
    },
    greetings: {
      firstRun: {
        message:
          "Hi! I'm a Bot. Try asking me things like 'Get favourite colour', 'Set favourite colour' or 'help' for more assistance."
      },
      whatup: {
        message:
        "Hi I found someone"
      },
      hello: {
        message: "Welcome back!"
      },
      hi:{
        message: "Hi"
      }, 
      name:{
        message: "What's your name?"
      }
    },
    responses: {
      looking: {
        message:
          "Who are you looking for?"
      },
      takealook: {
        message:
        "Let me take a look, and see if i can find"
      },
      notFound: {
        message: "Well I coudn´t find the person that are you looking for, try with another name if you like"
      },
      found: {
        message: "I found someone! Let me show you"
      }
    }
  };
  