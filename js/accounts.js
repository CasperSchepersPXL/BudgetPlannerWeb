function findAccounts() {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts';

    return fetch(url,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        });
}


function addAccount(iban, name) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts';
    let data = {'iban': iban, 'name': name};

    return fetch(url,
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 200) {
                return response;
            }
        });
}


function removeAccount(id) {
    let url = BACKEND_URL + '/BudgetPlanner/api/accounts/' + id;

    fetch(url,
        {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status === 202) {
                return response;
            }
        })
}
