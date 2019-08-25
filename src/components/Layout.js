import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Layout = (props) => {
    const { t } = useTranslation();

    return (
        <div>
            <div>
                <p>{t('Navigation:')}</p>

                <ul>
                    <li>
                        <Link to='/sign-in/'>{t('Sign-in')}</Link>
                    </li>
                    <li>
                        <Link to='/sign-up/'>{t('Sign-up')}</Link>
                    </li>
                    <li>
                        <Link to='/products/'>{t('Products')}</Link>
                    </li>
                    <li>
                        <Link to='/users/'>{t('Users')}</Link>
                    </li>
                </ul>
            </div>
            { props.children }
        </div>
    );
};

export default Layout;