const form = document.getElementById("myForm");
const inp1 = document.getElementById("country");
const inp2 = document.getElementById("startDate");
const inp3 = document.getElementById("endDate");
const show = document.getElementById("show");

async function handleSubmit(event) {
  event.preventDefault();

  const country = inp1.value;
  const startDate = inp2.value;
  const endDate = inp3.value;

  if (!country || !startDate || !endDate) {
    alert("Please fill the values");
    return false;
  }

  const res = await fetch(
    `https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
  );
  const r = await res.json();

  console.log(r);

  let children = "";
  r.forEach((item) => {
    children += `
    <table class="table">
      <tr>
        <th>Confirmed cases</th>
        <td>${item.Confirmed}</td>
      </tr>
      <tr>
        <th>Active cases</th>
        <td>${item.Active}</td>
      </tr>
      <tr>
        <th>Confirmed cases</th>
        <td>${item.Deaths}</td>
      </tr>
    </table>
    `;
  });

  show.innerHTML = children;
}
