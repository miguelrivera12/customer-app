//  Fetch customer data from localStorage
const getSavedCustomer = function () {
    const customerJSON = localStorage.getItem('customers')

    if (customerJSON !== null) {
        return JSON.parse(customerJSON)
    } else {
        return []
    }
}


// Save customer to localStorage
const saveCustomer = function (customers) {
    localStorage.setItem('customers', JSON.stringify(customers))
}


// Render customers list
const renderCustomers = function (customers, filters) {
    const filteredCustomers = customers.filter(function (customer) {
        return customer.name.toLowerCase().includes(filters.searchText.toLowerCase())

    })

    const totalCustomers = customers.filter(function (customer) {
        return customer.name
    })    

    document.querySelector('#customers').innerHTML = ''
    document.querySelector('#summary').innerHTML = ''
    document.querySelector('#summary').appendChild(generateSummaryDOM(totalCustomers))

    filteredCustomers.forEach(function (customer) {
        document.querySelector('#customers').appendChild(generateCustomerDOM(customer))
    })
}


// Get the DOM elements for an individual customer
const generateCustomerDOM = function (customer) {
    const customerEl = document.createElement('p')
        customerEl.textContent = customer.name
        return customerEl
}


// Get DOM elemenst for summary information
const generateSummaryDOM = function ( totalCustomers) {
    const summary = document.createElement('h3')
    summary.textContent = `We have ${totalCustomers.length} customers`
    return summary
}