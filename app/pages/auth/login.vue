<template>
  <UCard>
    <template #header>
      Login page
    </template>
    <UForm class="flex flex-col gap-2 w-90" :state="formValues" :schema="loginSchema">
      <UFormField label="Email" name="email">
        <UInput v-model="formValues.email" required type="text" class="w-full" icon="i-lucide-mail" />
      </UFormField>
      <UFormField label="Passowrd" name="password">
        <UInput v-model="formValues.password" required type="password" class="w-full" icon="i-lucide-key-round" />
      </UFormField>
      <div class="text-center">
        <UButton type="submit" label="Login" />
      </div>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import z from 'zod';

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

type LoginSchema = z.output<typeof loginSchema>;

const formValues = ref<LoginSchema>({
  email: '',
  password: '',
});
</script>
