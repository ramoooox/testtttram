async function searchDomain() {
    const input = document.querySelector('.search-input').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!input) {
        alert('لطفاً نام دامنه را وارد کنید');
        return;
    }

    const apiKey = 'at_Urn7CkxhJPZ17lIWReEt7KaQCpuHV'; // کلید API شما
    const apiUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${input}&outputFormat=JSON`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');

        if (data.WhoisRecord) {
            resultDiv.textContent = `${input} - موجود نیست`;
            resultDiv.classList.add('unavailable');
        } else {
            resultDiv.textContent = `${input} - موجود`;
            resultDiv.classList.add('available');
        }

        resultsDiv.appendChild(resultDiv);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('خطا در بررسی دامنه. لطفاً دوباره تلاش کنید.');
    }
}
