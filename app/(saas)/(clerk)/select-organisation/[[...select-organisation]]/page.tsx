import { OrganizationList } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function SelectOrganisationPage() {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    return (
        <OrganizationList
            hidePersonal
            afterSelectOrganizationUrl="/organisation/:id"
            afterCreateOrganizationUrl="/organisation/:id"
        />
    );
}
