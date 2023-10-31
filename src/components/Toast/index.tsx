import { Toaster as DefaultToaster } from 'react-hot-toast'
export const Toaster = () => {
    return (
        <DefaultToaster
            position="top-center"
            toastOptions={{
                style: {
                    fontSize: '14px',
                    padding: '5px 10px',
                    marginTop: '15px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    boxShadow:
                        '0px 4px 8px rgba(0, 0, 0, 0.06), 0px 8px 16px 1px rgba(0, 0, 0, 0.12)',
                    color: '#fff',
                    zIndex: '99999',
                    backgroundColor: 'black',
                }
            }}
        />
    )
}
