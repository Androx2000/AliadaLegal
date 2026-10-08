import { supabase } from "@/lib/supabase";

export async function createRequest({
    country,
    document,
    formData,
}) {
    const payload = {
        email: formData.email.trim().toLowerCase(),
        pais: country,
        documento: document,
        nombre_completo: formData.name.trim(),
        telefono: formData.phone,
        telefono_pais: formData.phoneCountry || null,
        preferencia_contacto: formData.contactMethod,
        descripcion: formData.message.trim() || null,
        estado_solicitud: 'nuevo',
        terms_accepted: formData.termsAccepted,
        terms_accepted_at: formData.termsAccepted  ? new Date().toISOString()  : null,
        terms_version: '2026-10',
    }

    const { error } = await supabase
    .from('solicitudes')
    .insert(payload)

    if (error) {
        throw error
    }
}