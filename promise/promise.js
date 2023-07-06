let data = [
		{
			id: 1,
			name: 'Jack',
			age: 30,
		},
		{
			id: 2,
			name: 'John',
			age: 20,
		},
		{
			id: 3,
			name: 'Mark',
			age: 40,
		},
	];
	function render() {
		setTimeout(() => {
			data.forEach(user => {
				console.log(`${user.id}. ${user.name} ${user.age}`);
			});
		}, 2000);
	}
	render()

    function addUser(user) {
        return new Promise((res, rej) => {
            setTimeout(() => {
        		data = [...data, user];
        		console.log('-------');
        		let error = false

                if(!error){
                    res()
                } else {
                    rej('Xatolik bor!')
                }
        	}, 3000);
        })
        	
        }
        addUser({ id: data.length + 1, name: 'Eshmat', age: 50 })
        .then(render)
        .catch(error => console.log(error))