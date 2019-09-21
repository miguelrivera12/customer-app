const customers = getSavedCustomer()

const filters = {
    searchText: ''
}

renderCustomers(customers, filters)

document.querySelector('#add-customer').addEventListener('submit', function (e) {
    e.preventDefault()
    customers.push({
        name: e.target.elements.customerName.value
    })
    saveCustomer(customers)
    renderCustomers(customers, filters)
    e.target.elements.customerName.value = ''
})