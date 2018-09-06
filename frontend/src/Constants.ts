interface Address {
    name: string;
    street: string;
    city: string;
    postcode: string;
    phone: string;
    email: string;
}

export class Constants {

    /**
     * Google Tag Manager Container ID
     */
    public static readonly GTM_ID: string = 'GTM-NXV7QBH';

    /**
     * Google Analytics ID (normally defined in Tagmanager, here only used for opted-out)
     */
    public static readonly GA_ID: string = 'UA-103862978-1';

    /**
     * GDPR Contact data
     */
    public static readonly GDPR_CONTACT: Address = {
        name: 'XZY Company OR John Smith',
        street: 'Musterweg 1',
        city: 'Musterstadt',
        postcode: '12345',
        phone: '0987654321',
        email: 'test@test.de',
    };

    /**
     * GDPR privacy officer (Datenschutzbeauftragter)
     */
    public static readonly GDPR_PRIVACYOFFICER: Address = {
        name: 'John Smith',
        street: 'Musterweg 1',
        city: 'Musterstadt',
        postcode: '12345',
        phone: '0987654321',
        email: 'test@test.de',
    };
}



