import Swal from "sweetalert2";
import btnCls from '../components/ui/Button/Button.module.scss'

const swal = Swal.mixin({
    customClass: {
        confirmButton: [btnCls.box, btnCls.stroke].join(' '),
        cancelButton: [btnCls.box, btnCls.fill, btnCls.mr10].join(' ')
    },
    buttonsStyling: false
})

export const unsavedExitConfirm = callback => {
    swal.fire({
        text: 'На странице есть несохраненные данные, выйти без сохранения?',
        showCancelButton: true,
        confirmButtonText: 'Выйти',
        cancelButtonText: 'Остаться',
        allowEscapeKey: true,
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed) {
                callback()
            }
        })
}

export const deleteConfirm = callback => {
    swal.fire({
        text: 'Подтвердите удаление …',
        showCancelButton: true,
        confirmButtonText: 'Удалить',
        cancelButtonText: 'Отменить',
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed) {
                callback()
            }
        })
}

export const cancelConfirm = callback => {
    swal.fire({
        text: 'Подтвердите отмену уведомления',
        showCancelButton: true,
        confirmButtonText: 'Подтвердить',
        cancelButtonText: 'Нет',
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed) {
                callback()
            }
        })
}