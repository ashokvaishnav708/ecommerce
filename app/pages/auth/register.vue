<template>
  <UCard>
    <template #header>
      <div class="text-center text-2xl font-bold">
        Register
      </div>
    </template>
    <UForm class="flex flex-col gap-4 w-96" :state="formValues" :schema="registerSchema" :validate="validate">
      <UFormField label="First name" name="firstName">
        <UInput v-model="formValues.firstName" required type="text" class="w-full" />
      </UFormField>
      <UFormField label="Last name" name="lastName">
        <UInput v-model="formValues.lastName" required type="text" class="w-full" />
      </UFormField>
      <UFormField label="Email" name="email">
        <UInput v-model="formValues.email" required type="text" class="w-full" />
      </UFormField>
      <UFormField label="Passowrd" name="password">
        <UInput v-model="formValues.password" required type="password" class="w-full" />
      </UFormField>
      <UFormField label="Repeat passowrd" name="repeatPassword">
        <UInput v-model="formValues.repeatPassword" required type="password" class="w-full" />
      </UFormField>
      <div class="flex justify-between">
        <UButton type="submit" label="Register" />
        <div class="flex gap-2">
          <p>Already have an account?</p>
          <NuxtLink class="text-gray-500" to="/auth/login">
            Click here
          </NuxtLink>
        </div>
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import type { FormError } from '@nuxt/ui';
import z from 'zod';

const registerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  password: z.string().min(8),
  repeatPassword: z.string().min(8),
});

type RegisterSchema = z.output<typeof registerSchema>;

const formValues = ref<Partial<RegisterSchema>>({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined,
  repeatPassword: undefined,
});

function validate(formValues: Partial<RegisterSchema>): FormError[] {
  const formErrors: FormError[] = [];
  if (formValues.password !== formValues.repeatPassword)
    formErrors.push({ name: 'repeatPassword', message: 'Password mismatch.' });
  return formErrors;
}
</script>
