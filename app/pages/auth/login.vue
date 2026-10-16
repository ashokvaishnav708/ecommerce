<template>
    <UCard>
        <template #header>Login page</template>
        <UForm class="flex flex-col gap-2" :state="formValues" :validate="validate">
            <UFormField label="Email" name="email">
                <UInput v-model="formValues.email" required type="text" icon="i-lucide-mail" />
            </UFormField>
            <UFormField label="Passowrd" name="password">
                <UInput v-model="formValues.password" required type="password" icon="i-lucide-key-round" />
            </UFormField>
            <div class="text-center">
                <UButton type="submit" label="Login" />
            </div>
        </UForm>
    </UCard>
</template>
<script setup lang="ts">
import type { FormError } from '@nuxt/ui';

type LoginFormValues = { email?: string, password?: string };

const formValues = ref<LoginFormValues>({
    email: undefined,
    password: undefined,
});


function validate(formValues: LoginFormValues): FormError[] {
    const errors: FormError[] = [];
    if (!formValues.email) errors.push({ name: 'email', message: 'Required' });
    if (formValues.email && !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email))) errors.push({ name: 'email', message: "Invalid email address" });
    if (!formValues.password) errors.push({ name: 'password', message: 'Required' });
    return errors;
}

</script>