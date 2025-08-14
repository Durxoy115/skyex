
import LoginPage from '../pageobjects/login.page.js'
import WhiteLvl from '../pageobjects/addwhitelvl.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('mvp1', '12345678')
        
        
    })
})
describe('Add a white lvl', () => {
    it('should add a wl', async () => {
        await WhiteLvl.open()

        await WhiteLvl.addWhiteLvl()
        
        
    })
})

