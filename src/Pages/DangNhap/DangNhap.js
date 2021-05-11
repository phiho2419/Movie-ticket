import React from 'react'

export default function DangNhap() {
    let timer;

    document.addEventListener('input', e => {
        const el = e.target;

        if (el.matches('[data-color]')) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
            }, 100)
        }
    })
    return (
        <div className="DangNhap">
            <div className="DN__content">
                <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label">Tài Khoản</span>
                </label>
                <label class="input">
                    <input class="input__field" type="text" placeholder=" " />
                    <span class="input__label">Mật Khẩu</span>
                </label>
                <div className="DN__btn">
                    <button type="submit">Đăng Nhập</button>
                </div>
            </div>

        </div>
    )
}
