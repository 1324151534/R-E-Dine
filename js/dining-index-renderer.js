document.getElementById('addBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_add();
})

document.getElementById('delBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_del();
})

document.getElementById('editBTN').addEventListener('click', () => {
    window.REDAPI.debug_reload_merchant_edit();
})