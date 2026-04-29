const standardsTests = {
    "IEC 61010-1": [
        { clause: "4.4.2.2", name: "Protective impedance" },
        { clause: "4.4.2.3", name: "Protective conductor" },
        { clause: "4.4.2.4", name: "Equipment or parts for short-term or intermittent operation" },
        { clause: "4.4.2.5", name: "Motors" },
        { clause: "4.4.2.6", name: "Capacitors" },
        { clause: "4.4.2.7.2", name: "Mains transformers. Short circuit" },
        { clause: "4.4.2.7.3", name: "Mains transformers. Overload" },
        { clause: "4.4.2.8", name: "Outputs" },
        { clause: "4.4.2.9", name: "Equipment for more than one supply" },
        { clause: "4.4.2.10", name: "Cooling" },
        { clause: "4.4.2.11", name: "Heating devices" },
        { clause: "4.4.2.12", name: "Insulation between circuits and parts" },
        { clause: "4.4.2.13", name: "Interlocks" },
        { clause: "4.4.2.14", name: "Voltage selectors" },
        { clause: "5.1.3", name: "Input test" },
        { clause: "5.3", name: "Durability of markings" },
        { clause: "6.2", name: "Determination of accessible parts" },
        { clause: "6.3.1", name: "Levels in normal condition" },
        { clause: "6.3.2", name: "Levels in single fault condition" },
        { clause: "6.4.4", name: "Impedance" },
        { clause: "6.5.2.3", name: "Protective conductor terminal (binding screw test)" },
        { clause: "6.5.2.4", name: "Impedance of protective bonding of plug-connected equipment" },
        { clause: "6.5.2.5", name: "Impedance of protective bonding of permanently connected equipment" },
        { clause: "6.5.2.6", name: "Transformer protective bonding screen" },
        { clause: "6.5.4", name: "Protective impedance" },
        { clause: "6.5.5", name: "Automatic disconnection of the supply" },
        { clause: "6.5.6", name: "Current- or voltage- limiting device" },
        { clause: "6.6.4", name: "Terminals for stranded conductors (Manual test)" },
        { clause: "6.7", name: "Clearance and creepage distances" },
        { clause: "6.8", name: "Voltage tests" },
        { clause: "6.10.2.2", name: "Non-detachable mains supply cords (Cord anchorage test)" },
        { clause: "7.3.4", name: "Limitation of force and pressure" },
        { clause: "7.4", name: "Stability" },
        { clause: "7.5.2", name: "Handles and grips" },
        { clause: "7.5.3", name: "Lifting devices" },
        { clause: "7.6", name: "Wall mounting" },
        { clause: "8.2.1", name: "Static test" },
        { clause: "8.2.2", name: "Impact test" },
        { clause: "8.3", name: "Drop test" },
        { clause: "9.4", name: "Limited energy circuit" },
        { clause: "10.4", name: "Temperature tests" },
        { clause: "10.5.2", name: "Non-operative treatment" },
        { clause: "10.5.3", name: "Ball pressure test" },
        { clause: "11.2", name: "Cleaning" },
        { clause: "11.3", name: "Spillage" },
        { clause: "11.4", name: "Overflow" },
        { clause: "11.6", name: "IP tests" },
        { clause: "11.7.1", name: "Maximum pressure test" },
        { clause: "11.7.2", name: "Leakage and rupture test" },
        { clause: "11.7.3", name: "Leakage from low pressure parts" },
        { clause: "11.7.4", name: "Overpressure safety device test" },
        { clause: "12.2", name: "X-ray tests" },
        { clause: "12.3", name: "Optical radiation testing" },
        { clause: "12.5.1", name: "Sonic pressure test" },
        { clause: "12.5.2", name: "Ultrasonic pressure test" },
        { clause: "13.2.2", name: "Batteries and battery charging" },
        { clause: "13.2.3", name: "Cathode ray tubes check" },
        { clause: "14.3", name: "Overtemperature protection devices" },
        { clause: "14.4", name: "Fuse replacement test" },
        { clause: "14.7", name: "Vertical burn test" },
        { clause: "14.8", name: "Transient voltages limitations test" },
        { clause: "15", name: "Interlocks tests" }
    ],
    "IEC 62368-1": [
        { clause: "4.6.2", name: "Conductors fixing test" },
        { clause: "4.7.3", name: "Test for equipment intended for direct insertion into mains socket-outlets" },
        { clause: "4.8.4.6", name: "Crushing test for handheld remote controls" },
        { clause: "5.3.2.4", name: "Test for terminals for connecting stripped wire" },
        { clause: "5.2", name: "ES classification" },
        { clause: "5.4.1.7", name: "Test for circuits generating starting pulses" },
        { clause: "5.4.1.8", name: "Working voltage measurement" },
        { clause: "5.4.1.10.2", name: "Vicat softening test" },
        { clause: "5.4.1.10.3", name: "Ball pressure test" },
        { clause: "5.4.2", name: "Clearances" },
        { clause: "5.4.3", name: "Creepage distances" },
        { clause: "5.4.4.6.5", name: "Mandrel test" },
        { clause: "5.4.8", name: "Humidity conditioning" },
        { clause: "5.4.9", name: "Electric strength test" },
        { clause: "5.4.10", name: "Tests for safeguards against transient voltages" },
        { clause: "5.5.2.2", name: "Capacitance discharge" },
        { clause: "5.6.6", name: "Resistance of the protective bonding system" },
        { clause: "5.7", name: "Touch current and voltage test" },
        { clause: "8.7", name: "Wall/ceiling mounting test" },
        { clause: "8.8", name: "Handle strength test" },
        { clause: "8.6.2", name: "Static stability test" },
        { clause: "8.6.3", name: "Relocation stability test" },
        { clause: "8.11", name: "Mounting means for SRME equipment" },
        { clause: "9.6", name: "Requirements for wireless power transmitters" },
        { clause: "B.2.5", name: "Input test" },
        { clause: "B.2.6", name: "Temperature measurements" },
        { clause: "B.3", name: "Abnormal operating conditions tests" },
        { clause: "B.4", name: "Fault conditions tests" },
        { clause: "F.3.10", name: "Permanence of marking test" },
        { clause: "C.1", name: "Protection from UV radiation" },
        { clause: "G.5.3", name: "Transformers" },
        { clause: "G.5.4", name: "Motors" },
        { clause: "G.7.3", name: "Cord strain relief" },
        { clause: "G.8", name: "Varistors" },
        { clause: "G.9", name: "Current limiters" },
        { clause: "G.10", name: "Resistors" },
        { clause: "G.13", name: "Printed boards" },
        { clause: "G.15", name: "Pressurized liquid filled components" },
        { clause: "G.16", name: "Capacitor discharge function test" },
        { clause: "Annex M", name: "Batteries test" },
        { clause: "P.4.2", name: "Test of metallized coatings" },
        { clause: "Annex Q", name: "LPS evaluation" },
        { clause: "Annex R", name: "Limited short-circuit test" },
        { clause: "Annex S", name: "Flammability test" },
        { clause: "T.2", name: "Steady force test, 10N" },
        { clause: "T.3", name: "Steady force test, 30N" },
        { clause: "T.4", name: "Steady force test, 100N" },
        { clause: "T.5", name: "Steady force test, 250N" },
        { clause: "T.6", name: "Impact test" },
        { clause: "T.7", name: "Drop test" },
        { clause: "T.8", name: "Stress relief test" },
        { clause: "T.9", name: "Glass impact test" },
        { clause: "T.10", name: "Glass fragmentation test" },
        { clause: "T.11", name: "Test for telescopic or rod antennas" },
        { clause: "Annex V", name: "Determination of accessible parts" },
        { clause: "Annex Y", name: "Tests for outdoor enclosures" }
    ]
};

let currentStandard = "IEC 61010-1";
let currentPage = 1;
let itemsPerPage = 20;
const testResultsByStandard = {};

function getCurrentTestsData() { return standardsTests[currentStandard] || []; }
function getResultStore() {
    if (!testResultsByStandard[currentStandard]) {
        testResultsByStandard[currentStandard] = {};
    }
    return testResultsByStandard[currentStandard];
}
function getDefaultTestResult(test) { return { clause: test.clause, name: test.name, verdict: "N/A", comment: "" }; }
function getOrCreateResult(test) {
    const store = getResultStore();
    if (!store[test.clause]) store[test.clause] = getDefaultTestResult(test);
    return store[test.clause];
}
function updateStyle(el) { el.classList.toggle('v-applicable', el.value === 'Applicable'); el.classList.toggle('v-na', el.value !== 'Applicable'); }

function createTableRow(test) {
    const result = getOrCreateResult(test);
    const tr = document.createElement('tr');
    tr.dataset.clause = test.clause;
    tr.innerHTML = `<td>${test.clause}</td><td>${test.name}</td><td><select class="v-select" onchange="handleVerdictChange(this)"><option value="Applicable" ${result.verdict === 'Applicable' ? 'selected' : ''}>Applicable</option><option value="N/A" ${result.verdict === 'N/A' ? 'selected' : ''}>N/A</option></select></td><td><textarea placeholder="Enter comments..." oninput="handleCommentChange(this)">${result.comment || ''}</textarea></td>`;
    return tr;
}

function handleVerdictChange(selectEl) {
    const clause = selectEl.closest('tr').dataset.clause;
    const store = getResultStore();
    if (store[clause]) store[clause].verdict = selectEl.value;
    updateStyle(selectEl);
}
function handleCommentChange(textareaEl) {
    const clause = textareaEl.closest('tr').dataset.clause;
    const store = getResultStore();
    if (store[clause]) store[clause].comment = textareaEl.value;
}

function renderTable() {
    const testsData = getCurrentTestsData();
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const pageTests = testsData.slice(start, start + itemsPerPage);
    pageTests.forEach(test => tbody.appendChild(createTableRow(test)));
    document.querySelectorAll('.v-select').forEach(updateStyle);
    updatePaginationControls();
}
function updatePaginationControls() {
    const testsData = getCurrentTestsData();
    const totalPages = Math.max(1, Math.ceil(testsData.length / itemsPerPage));
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages} (Total: ${testsData.length} tests)`;
    document.getElementById('recordCount').textContent = `Total: ${testsData.length} tests`;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}
function nextPage() { const totalPages = Math.max(1, Math.ceil(getCurrentTestsData().length / itemsPerPage)); if (currentPage < totalPages) { currentPage++; renderTable(); } }
function previousPage() { if (currentPage > 1) { currentPage--; renderTable(); } }
function handleItemsPerPageChange() { itemsPerPage = parseInt(document.getElementById('itemsPerPage').value, 10); currentPage = 1; renderTable(); }

function handleStandardChange() {
    currentStandard = document.getElementById('standardSelect').value;
    currentPage = 1;
    updateTitle();
    initializeStandardResults(currentStandard);
    renderTable();
}
function updateTitle() { document.getElementById('pageTitle').textContent = `${currentStandard} Checklist Pro`; }
function initializeStandardResults(standard) {
    if (!testResultsByStandard[standard]) testResultsByStandard[standard] = {};
    const store = testResultsByStandard[standard];
    standardsTests[standard].forEach(test => { if (!store[test.clause]) store[test.clause] = getDefaultTestResult(test); });
}

function createDownloadLink(content, mimeType, filename) {
    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob); link.download = filename; link.style.display = 'none'; document.body.appendChild(link); return link;
}
function triggerDownloads(items) { items.forEach((item, index) => setTimeout(() => { const link = createDownloadLink(item.content, item.mimeType, item.filename); link.click(); URL.revokeObjectURL(link.href); link.remove(); }, index * 250)); }

function buildTextReport(report) {
    const pad = (value, width) => String(value || '').padEnd(width, ' ');
    const lines = [
        `${report.standard} Checklist Report`,
        `Applicant: ${report.metadata.applicant || ''}`,
        `Equipment under test: ${report.metadata.equipment || ''}`,
        `SII PO number: ${report.metadata.poNumber || ''}`,
        `Date: ${report.metadata.testDate || ''}`,
        '', 'Tests:', `${pad('Clause', 10)} | ${pad('Verdict', 12)} | Comment`, `${'-'.repeat(10)}-+-${'-'.repeat(12)}-+-${'-'.repeat(50)}`
    ];
    report.tests.forEach(test => lines.push(`${pad(test.clause, 10)} | ${pad(test.verdict, 12)} | ${test.comment || ''}`));
    return lines.join('\n');
}

function saveData() {
    const tests = getCurrentTestsData();
    const allTests = tests.map(test => { const r = getOrCreateResult(test); return { clause: r.clause, verdict: r.verdict, comment: r.comment }; });
    const report = { standard: currentStandard, metadata: { applicant: applicant.value, equipment: equipment.value, poNumber: poNumber.value, testDate: testDate.value }, tests: allTests };
    const safeStandard = currentStandard.replace(/\s+/g, '_').replace(/[^A-Za-z0-9_-]/g, '');
    triggerDownloads([
        { content: JSON.stringify(report, null, 2), mimeType: 'application/json', filename: `${safeStandard}_Report.json` },
        { content: buildTextReport(report), mimeType: 'text/plain', filename: `${safeStandard}_Report.txt` }
    ]);
}

function loadData(input) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const report = JSON.parse(e.target.result);
            if (report.metadata) {
                applicant.value = report.metadata.applicant || '';
                equipment.value = report.metadata.equipment || '';
                poNumber.value = report.metadata.poNumber || '';
                testDate.value = report.metadata.testDate || '';
            }
            if (report.standard && standardsTests[report.standard]) {
                currentStandard = report.standard;
                document.getElementById('standardSelect').value = currentStandard;
            }
            initializeStandardResults(currentStandard);
            const store = getResultStore();
            const loadedTests = report.tests || report;
            standardsTests[currentStandard].forEach(test => { store[test.clause] = getDefaultTestResult(test); });
            loadedTests.forEach(item => {
                if (store[item.clause]) { store[item.clause].verdict = item.verdict === 'Applicable' ? 'Applicable' : 'N/A'; store[item.clause].comment = item.comment || ''; }
            });
            currentPage = 1; updateTitle(); renderTable(); alert('Data loaded successfully.');
        } catch (err) {
            console.error(err);
            alert('Error reading file. Make sure you selected a valid report .json file.');
        }
        input.value = '';
    };
    reader.readAsText(file);
}

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(standardsTests).forEach(initializeStandardResults);
    updateTitle();
    renderTable();
});