console.log('Connected!') // Test to see if the file 'app.js' is linked to 'index.html'

function createCrop() {
    // Get value from inputs
    let cropName = document.forms['cropForm']['crop_name'].value
    let cropDate = document.forms['cropForm']['planting_date'].value
    let cropStats = document.forms['cropForm']['growth_status'].value

    const table = document.querySelector("#crop_table_body")
    const newRow = table.insertRow()

    const cell1 = newRow.insertCell(0)
    const cell2 = newRow.insertCell(1)
    const cell3 = newRow.insertCell(2)

    // Create a Table Data <td> for each value
    cell1.textContent = cropName;
    // Use Moment.js to parse and format the date
    let formattedDate = moment(cropDate).format('L');
    cell2.textContent = formattedDate;
    cell3.textContent = cropStats;

    // Reset the form fields after adding the row
    document.forms['cropForm'].reset();
}
