import { useState } from 'react'; 
import './PopupForm.css';
import { Input, Modal, Space } from 'antd';

// eslint-disable-next-line react/prop-types
function PopupForm({ open, setOpen }) {
    const [confirmLoading, setConfirmLoading] = useState(false);
   
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <Modal
            title="Оставьте ваши данные, и мы с вами свяжемся"
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            className='custom-modal'
            cancelText='Отменить'
        >
            <Space 
                direction="vertical"
                size="small"
                style={{
                  display: 'flex',
                }}
            >
                <Input 
                    placeholder='Ваше имя'
                    
                />
                <Input 
                    placeholder='Ваш номер телефона'
                    type='tel'
                    
            
                />
            </Space>
            

        </Modal>
    )
}

export default PopupForm