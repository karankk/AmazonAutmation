describe('amazon',()=>
{
    it('amazon logo should be displayed',async()=>
    {
        await browser.url('/');
        await expect($('#nav-logo-sprites')).toBeDisplayed();


    })

})