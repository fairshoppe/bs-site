import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();
const projectId = '1030865915413';

export async function getSecret(secretId: string): Promise<string> {
    try {
        const [secret] = await client.accessSecretVersion({
            name: `projects/${projectId}/secrets/${secretId}/versions/latest`
        });
        return secret.payload ? secret.payload.data!.toString() : '';
    } catch (error) {
        console.error('Error accessing secret:', error);
        throw error;
    }
}

  