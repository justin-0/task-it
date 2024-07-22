type OrganisationIdPageProps = {
    params: {
        id: string;
    };
};

export default function OrganisationIdPage({
    params,
}: OrganisationIdPageProps) {
    return <h1>{params.id}</h1>;
}
