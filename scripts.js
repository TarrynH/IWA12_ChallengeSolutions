const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const book1 = document.querySelector('#book1')
status1 = book1.querySelector('.status')
reserve1 = book1.querySelector('.reserve')
checkout1 = book1.querySelector('.checkout')
checkin1 = book1.querySelector('.checkin')

const book2 = document.querySelector('#book2')
status2 = book2.querySelector('.status')
reserve2 = book2.querySelector('.reserve')
checkout2 = book2.querySelector('.checkout')
checkin2 = book2.querySelector('.checkin')

const book3 = document.querySelector('#book3')
status3 = book3.querySelector('.status')
reserve3 = book3.querySelector('.reserve')
checkout3 = book3.querySelector('.checkout')
checkin3 = book3.querySelector('.checkin')

checkin1.style = 'none'
status1.style = `color: ${STATUS_MAP[status1.textContent].color}`
reserve1 = STATUS_MAP[status1.textContent].canReserve ? reserve1.disabled = false : reserve1.disabled = true
checkout1 = STATUS_MAP[status1.textContent].canCheckout ? checkout1.disabled = false : checkout1.disabled = true
checkin1 = STATUS_MAP[status1.textContent].canCheckIn ? checkin1.disabled = false : checkin1.disabled = true

checkin2.style = 'none'
status2.style = `color: ${STATUS_MAP[status2.textContent].color}`
reserve2 = STATUS_MAP[status2.textContent].canReserve ? reserve2.disabled = false : reserve2.disabled = true
checkout2 = STATUS_MAP[status2.textContent].canCheckout ? checkout2.disabled = false : checkout2.disabled = true
checkin2 = STATUS_MAP[status2.textContent].canCheckIn ? checkin2.disabled = false : checkin2.disabled = true

checkin3.style = 'none'
status3.style = `color: ${STATUS_MAP[status3.textContent].color}`
reserve3 = STATUS_MAP[status3.textContent].canReserve ? reserve3.disabled = false : reserve3.disabled = true
checkout3 = STATUS_MAP[status3.textContent].canCheckout ? checkout3.disabled = false : checkout3.disabled = true
checkin3 = STATUS_MAP[status3.textContent].canCheckIn ? checkin3.disabled = false : checkin3.disabled = true