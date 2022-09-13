let gannnnuserForm = document.getElementById("sidd-form");
const gannrevEntries = () => {
  let gan22 = localStorage.getItem("sidd-ent");
  if (gan22) {
    gan22 = JSON.parse(gan22);
  } else {
    gan22 = [];
  }
  return gan22;
};

let ue = gannrevEntries();
const ganndispE = () => {
  const e1 = gannrevEntries();
  const siddte = e1
    .map((entry) => {
      const namesidd = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailsidd = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordsidd = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobsidd = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermssidd = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
      const rowsidd = `<tr>${namesidd} ${emailsidd} ${passwordsidd} ${dobsidd} ${acceptTermssidd}</tr>`;
      return rowsidd;
    })
    .join("\n");
  const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${siddte} </table>`;
  let details = document.getElementById("sidd-ent");
  details.innerHTML = table;
};
const siddsaveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions =
    document.getElementById("acceptTerms").checked;
  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndConditions,
  };
  ue.push(entry);
  localStorage.setItem("sidd-ent", JSON.stringify(ue));
  ganndispE();
};
gannnnuserForm.addEventListener("submit", siddsaveUserForm);
ganndispE();

function ganval() {
  let gannnelement = document.getElementById("dob");
  const dob = document.getElementById("dob").value;
  let gannn = new Date(dob);
  var gannnntodaydate = new Date();
  var age =
    parseInt(gannnntodaydate.getFullYear()) - parseInt(gannn.getFullYear());
  if (
    gannnntodaydate.getMonth() < gannn.getMonth() ||
    (gannnntodaydate.getMonth() === gannn.getMonth() &&
      gannnntodaydate.getDate() < gannn.getDate())
  )
    age--;
  if (!(age > 18 && age < 55)) {
    gannnelement.setCustomValidity("age should between 18 and 55");
    gannnelement.reportValidity();
  } else {
    gannnelement.setCustomValidity("");
  }
}
