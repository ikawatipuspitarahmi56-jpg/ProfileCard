function switchTab(tabName, event) {
    const panes = document.querySelectorAll('.tab-pane');
    panes.forEach(pane => pane.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetPane = document.getElementById(`tab-${tabName}`);
    if (targetPane) {
        targetPane.classList.add('active');
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

const shareBtn = document.getElementById('shareBtn');
const toast = document.getElementById('toast');

if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Link profil berhasil disalin! 📋');
        }).catch(() => {
            showToast('Link profil berhasil disalin! 📋');
        });
    });
}

function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}