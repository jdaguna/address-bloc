const inquirer = require('inquirer');

module.exports = class MenuController {
    constructor(){
        this.mainMenuQuestions = [
            {
                type: "list",
                name: "mainMenuChoice",
                message: "Please choose from an option below: ",
                choices: [
                    "Add new contact",
                    "Get Current Time and Date",
                    "Remind Me",
                    "Exit"
                ]
            }
        ];
        this.contacts = [];
    }

    main(){
        console.log(`Welcome to AddressBloc!`);
        inquirer.prompt(this.mainMenuQuestions).then((response) => {
          switch(response.mainMenuChoice){
            case "Add new contact":
              this.addContact();
              break;
            case "Get Current Time and Date": 
              this.getTime();
              break;
            case "Remind Me": 
              this.remindMe();
            break;  
            case "Exit":
              this.exit();
            default:
              console.log("Invalid input");
              this.main();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    clear(){
        console.log("\x1Bc");
    }

    addContact(){
        this.clear();
        console.log('addContact called');
        this.main();
    }

    getTime(){
        this.clear();
        var date = new Date();
        var dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                            .toISOString().split("T");
        var timeString = dateString[1].split(".")[0];

        console.log("Today's date is " + dateString[0]);
        console.log("The time is currently " + timeString);
        this.main();
    }

    remindMe(){
        // this.clear();
        // console.log("Learning is a life-long pursuit");
        return "Learning is a life-long pursuit";
        // this.main();
    }

    exit(){
        this.clear();
        console.log("Thanks for using AddressBloc!");
        process.exit();
    }

    getContactCount(){
        return this.contacts.length;
    }
}

