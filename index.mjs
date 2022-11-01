const api_url = 'https://api.adviceslip.com/advice';
const adviceIdEl = document.getElementById('advice-id');
const adviceTextEl = document.getElementById('advice-text');
const adviceBtn = document.querySelector('.advice-btn');
const loading = document.getElementById('loading');

const toggleLoading = (state) => {
    loading.setAttribute('data-active', state);
}

const changeAdvice = async () => {
    toggleLoading(true);
    const response = await fetch(api_url, {cache: 'no-store'});
    const advice = JSON.parse(await response.text()).slip;
    toggleLoading(false);
    adviceIdEl.innerText = advice.id;
    adviceTextEl.innerText = advice.advice;
}

document.body.onload = changeAdvice;
adviceBtn.addEventListener('click', changeAdvice);