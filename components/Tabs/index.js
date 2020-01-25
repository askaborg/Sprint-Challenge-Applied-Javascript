// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const createTab = topic => {
    const tabDiv = document.createElement('div')
    tabDiv.textContent = topic
    tabDiv.classList.add('tab')

    return tabDiv
}

const axiosGet = axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(responseTopics => {

    const topicsList = Object.values(responseTopics.data.topics)
    console.log('topicsList', topicsList)

    topicsList.forEach(topic => {
        const tabInsert = document.querySelector('.topics')
        tabInsert.appendChild(createTab(topic))
    })
})

.catch(errorTopics => {
    document.querySelector('.topics').textContent = errorTopics
})