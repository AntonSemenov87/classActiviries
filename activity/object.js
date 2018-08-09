var object = {
    address: {
        street: {
            number: 123,
            name: "Elm Street",
            subdivision: {
                name: "Nightmares Only",
                board: {
                    members: [
                        "Freddy", "Jason", "Michael", "Jamie"
                    ]
                }
            }
        }
    },
    homes: [
        {
            type: "Mansion",
            contractors: [
                {
                    name: "Joan Plumbing Co."
                },
                {
                    name: "Suzanne Electric Boutique"
                },
            ]
        }
    ]
}

//Jamie from the object
console.log(object.address.street.subdivision.board.members[3])

//Suzanne
console.log(object.homes[0].contractors[1].name)