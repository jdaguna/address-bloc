const MenuController = require("../controllers/MenuController");

describe("MenuController", ()=>{
    beforeEach(()=>{
        this.menu = new MenuController();
    });

    describe("remindMe()", ()=> {
        it("should return Learning is a life-long pursuit when called", () =>{
            expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
        });
    });


    describe("getContactCount()", ()=> {
/*
we are calling the desvirbe method and passing MenuController as the name of the test suite. We then pass a function defining the suite. Insde we have another call to describe.
we call this function again because we might want to test serveal methods of the same class and seperating them with different describe calls is a good way of grouping them.
*/

        it("should return 0 when no contacts are in the book", () => {
            // const menu = new MenuController();
            // expect(menu.getContactCount()).toBe(0);
            expect(this.menu.getContactCount()).toBe(0);
        });

        it("should return 1 when there is exactly one contact in  the book", () => {
            // const menu = new MenuController();
            this.menu.contacts.push("Bob");
            // expect(menu.getContactCount()).toBe(1);
            expect(this.menu.getContactCount()).toBe(1);
        });

    });
});

/*
inside of the second paramter we pass as function implementing the specs. the first spec test that the book has no entries, calling the getContactCount method should return 0. Inside of the spec, we set that expectation as such and use a matcher, toBe, which checks that the return from the expect method meatches the argument passed to the toBe method. If that fails, our test will fail. Let's run our test suite by running npm test.
*/
