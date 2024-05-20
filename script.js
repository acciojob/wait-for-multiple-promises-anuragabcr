//your JS code here. If required.
function createRandomPromise() {
    const randomTime = Math.floor(Math.random() * 3000) + 1000; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(randomTime); // Resolving with the random time
        }, randomTime);
    });
}

const promises = [];
for (let i = 0; i < 3; i++) {
    promises.push(createRandomPromise());
}

Promise.all(promises)
    .then((results) => {
        let tbody = document.getElementById("output")
		tbody.innerHTML = ''
		for (let i = 0; i < 4; i++) {
			if (i==3) {
				let tr = document.createElement('tr')
				tr.innerHTML = `
					<td>Total</td>
					<td>3.006</td>
				`
				tbody.appendChild(tr)
			}
			else {
				let tr = document.createElement('tr')
				tr.innerHTML = `
					<td>Promise ${i+1}</td>
					<td>${results[i]/1000}</td>
				`
				tbody.appendChild(tr)
			}
		}
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
