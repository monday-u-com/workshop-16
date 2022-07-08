// Some examples of selectors:
// youtube logo - .ytd-logo
// search input - input#search
// etc.

describe('open harry potter vs star wars movie', () => {
    before(() => {
        //Assemble
        cy.visit('https://youtube.com')
    })

    it('page was loaded and can see youtube logo and at least one video in the list', () => {
        //Assert
        cy.get('.ytd-logo').should('be.visible')
        cy.get('.ytd-rich-grid-media').should('be.visible')
    })

    it('search for Harry Potter vs star wars movie with 33M views', () => {
        //Act
        cy.get('input#search').type(`Harry potter vs star wars`)
        cy.get('button#search-icon-legacy').click();
        //Assert
        cy.get('.ytd-video-renderer').contains("Harry Potter VS Star Wars")
        cy.get('.ytd-video-meta-block').contains("33M views")

    })

    it('open video and check that it has author block and views are more than 33M', () => {
        //Act
        cy.get('.ytd-video-renderer').first().click();
        //Assert
        cy.get('.watch-active-metadata ').should('be.visible')
        cy.get('.view-count').should('be.visible')
        cy.get('.view-count')
            .invoke('text')
            .then((value) => {
                return parseInt(value
                    .split(' ')[0] //removing " views" part
                    .split(',') // splitting by the comma, so we will get array of numbers
                    .join('')) //joining array of numbers to one number and parsing string to int

            })
            .should('be.gt', 33000000)

    })

    it('BONUS: click share button and check that share url is https://youtu.be/9N5KyjM5v0c', () => {
        //Act
        cy.get('yt-formatted-string').contains('Share').click()
        //Assert
        cy.get('#share-url').should('be.visible')
        cy.get('#share-url')
            .should('have.value', 'https://youtu.be/9N5KyjM5v0c')
    })
})
