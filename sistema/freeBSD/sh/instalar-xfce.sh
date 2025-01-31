#!/bin/sh

# Atualiza o sistema
if ! pkg update && pkg upgrade -y; then
    echo "Erro ao atualizar o sistema."
    exit 1
fi

# Instala o XFCE e outros pacotes necessários
if ! pkg install -y xfce xfce4-goodies xorg xorg-drivers; then
    echo "Erro ao instalar o XFCE e dependências."
    exit 1
fi

# Instala um gerenciador de exibição (ex: LightDM)
if ! pkg install -y lightdm lightdm-gtk-greeter; then
    echo "Erro ao instalar o LightDM."
    exit 1
fi

# Habilita o LightDM para iniciar automaticamente
if ! sysrc lightdm_enable="YES"; then
    echo "Erro ao habilitar o LightDM."
    exit 1
fi

# Cria um arquivo de configuração para o XFCE
XINITRC_PATH="/usr/local/etc/xdg/xfce4/xinitrc"
mkdir -p /usr/local/etc/xdg/xfce4
cat <<EOL > "$XINITRC_PATH"
#!/bin/sh
exec startxfce4
EOL

# Torna o arquivo executável
if ! chmod +x "$XINITRC_PATH"; then
    echo "Erro ao tornar o arquivo xinitrc executável."
    exit 1
fi

# Configura o sistema para usar o XFCE
if ! echo "exec startxfce4" > ~/.xinitrc; then
    echo "Erro ao configurar o .xinitrc."
    exit 1
fi

# Inicia o LightDM
if ! service lightdm start; then
    echo "Erro ao iniciar o LightDM."
    exit 1
fi

echo "Instalação e configuração do XFCE concluídas. Reinicie o sistema para aplicar as mudanças."

# Pergunta ao usuário se deseja reiniciar o sistema agora
read -p "Deseja reiniciar o sistema agora? (s/n): " REBOOT
if [ "$REBOOT" = "s" ]; then
    reboot
fi
