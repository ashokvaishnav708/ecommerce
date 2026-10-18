<template>
  <UCard>
    <template #header>
      <div class="text-center text-2xl font-bold">
        Login
      </div>
    </template>
    <UForm class="flex flex-col gap-4 w-90" :state="formValues" :schema="loginSchema">
      <UFormField label="Email" name="email">
        <UInput v-model="formValues.email" required type="text" class="w-full" icon="i-lucide-mail" />
      </UFormField>
      <UFormField label="Passowrd" name="password">
        <UInput v-model="formValues.password" required type="password" class="w-full" icon="i-lucide-key-round" />
      </UFormField>
      <div class="flex justify-between">
        <UButton label="Login with GitHub" variant="outline" icon="i-simple-icons-github" />
        <UButton type="submit" label="Login" />
      </div>
      <div class="flex gap-2">
        <p>Don't haeva an account yet?</p>
        <NuxtLink class="text-gray-500" to="/auth/register">
          Register
        </NuxtLink>
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
