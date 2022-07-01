// Some examples of selectors:
// youtube logo - .ytd-logo
// search input - input#search
// etc.

describe('open harry potter vs star wars movie', () => {
    // get
    before(() => {
        //Assemble
        cy.visit('https://youtube.com')
    })

    it('page was loaded and can see youtube logo and at least one video in the list', () => {
        //Assert
        //... your implementation
    })

    it('search for Harry Potter vs star wars movie with 33M views', () => {
        //Act
        //... your implementation
        //Assert
        //... your implementation
    })

    it('open video and check that it has author block and views are more than 33M', () => {
        //Act
        //... your implementation
        //Assert
        //... your implementation

    })
    //
    it('BONUS: click share button and check that share url is https://youtu.be/9N5KyjM5v0c', () => {
        //Act
        //... your implementation
        //Assert
        //... your implementation
    })
})
